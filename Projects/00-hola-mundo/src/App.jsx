import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){
    const sntzrr = {userName: 'sntzrr', initialIsFollowing: true}
    

    const users = [
        {
            userName: 'sntzrr',
            name: 'Santiago',
            isFollowing: false
        },
        {
            userName: 'sntzrr',
            name: 'Santiago',
            isFollowing: false
        },
        {
            userName: 'sntzrr',
            name: 'Santiago',
            isFollowing: false
        },
        {
            userName: 'sntzrr',
            name: 'Santiago',
            isFollowing: false
        }
    ]

    return(
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) => {
                    return(
                        <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        isFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}