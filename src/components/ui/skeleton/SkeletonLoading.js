import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export const SkeletonLoading = () => {

    let cardSkeleton = []
    for (let value = 0; cardSkeleton.length < 9; value++) {
        cardSkeleton.push(value + 1)
    }

    return (
        <SkeletonTheme color="gray" highlightColor="white">
            {/* <SkeletonTheme color="#666666" highlightColor="#9E9E9E"></SkeletonTheme> */}
            <div className="row row-cols-1 row-cols-md-3 g-4 m-2 d-flex justify-content-center">
                {
                    cardSkeleton.map((card) => (
                        <div key={card} className="col">
                            <Skeleton duration={2} delay={1} height={420} />
                        </div>
                    ))
                }
            </div>
        </SkeletonTheme>

    )
}
