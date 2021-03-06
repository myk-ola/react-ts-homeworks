import React, {useState} from 'react'
import Affairs from './Affairs'
import {Typography} from "@mui/material";

// types
export type AffairPriorityType = 'high'|'middle'|'low'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType):Array<AffairType> => {
    return (filter === 'all') ? affairs : affairs.filter(affair => affair.priority === filter)
    // switch (filter) {
    //     case 'all':
    //         return affairs;
    //     case 'high':
    //         return affairs.filter(affair => affair.priority === 'high')
    //     case 'middle':
    //         return affairs.filter(affair => affair.priority === 'middle')
    //     case 'low':
    //         return affairs.filter(affair => affair.priority === 'low')
    // }

}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter(affair => affair._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <Typography variant={"h5"} align={'center'}>Homeworks 2</Typography>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                filter={filter}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
        </div>
    )
}

export default HW2
