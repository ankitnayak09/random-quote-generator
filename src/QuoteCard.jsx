import React from 'react'

export default function QuoteCard({ quote, isLoading }) {
    return (
        <h3 className='quote'>{isLoading ? (<>
            <div class="lds-dual-ring"></div>
        </>) :
            quote}
        </h3>
    )
}
