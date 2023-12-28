import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const SkeletonCard = () => {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div className="card">
                <h4><Skeleton /></h4>
                <p><Skeleton count={3} /></p>
                <div className="info">
                    <div className="user">
                        <Skeleton width="20px" />
                        <Skeleton width="10px" />
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    );
};
