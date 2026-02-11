'use client'
import Link from 'next/link';
import React from 'react';

function Profiles(props) {
    let users = [
        {
            id: 1,
            name: "Aarush Sharma",
            city: "Delhi",
            email: "aarush@example.com",
            age: 25,
            post:[101,102,103]
        },
        {
            id: 2,
            name: "Meera Patel",
            city: "Mumbai",
            email: "meera@example.com",
            age: 28,
            post:[101,102,103]
        },
        {
            id: 3,
            name: "Rohan Verma",
            city: "Bangalore",
            email: "rohan@example.com",
            age: 30,
            post:[101,102,103]
        },
        {
            id: 4,
            name: "Ananya Singh",
            city: "Jaipur",
            email: "ananya@example.com",
            age: 24,
            post:[101,102,103]
        },
        {
            id: 5,
            name: "Kabir Khan",
            city: "Hyderabad",
            email: "kabir@example.com",
            age: 27,
            post:[101,102,103]
        }
    ];

    return (
        <div>
            <ul>
                {
                    users.map((obj) => {
                        return (
                            // <li key={obj.id}>{obj.name}</li>
                            <li key={obj.id} className='m-3 bg-red-300 inline-block'>
                                <Link href={`Profiles/Profile/${obj.name}`}>
                                {obj.name}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Profiles;