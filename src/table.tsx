import React, { useState } from 'react';
import { FC } from "react"

interface TableComponentProps {
    alcoholClasses: string[]
    stats?: any,
    subject: string
}

const TableComponent: FC<TableComponentProps> = (props) => {
    const [alcoholClasses] = useState(props.alcoholClasses);
    const [stats] = useState(props.stats as any);
    const [subject] = useState(props.subject)
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Measure</th>
                        {alcoholClasses.map((alcoholClass: any) => (
                            <th key={alcoholClass}>Class {alcoholClass}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{subject} Mean</td>
                        {alcoholClasses.map((alcoholClass: any) => (
                            <td key={alcoholClass}>{stats.mean[alcoholClass]?.toFixed(2)}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>{subject} Median</td>
                        {alcoholClasses.map(alcoholClass => (
                            <td key={alcoholClass}>{stats.median[alcoholClass]?.toFixed(2)}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>{subject} Mode</td>
                        {alcoholClasses.map(alcoholClass => (
                            <td key={alcoholClass}>{stats.mode[alcoholClass]?.toFixed(2)}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default TableComponent;