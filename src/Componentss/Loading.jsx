import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const Loading = () => {
  return (
    <div className="chi">
      <SkeletonTheme baseColor="#000" highlightColor="#000">
        <Skeleton height={300} duration={2} />
      </SkeletonTheme>
    </div>
  );
};

export default Loading;
