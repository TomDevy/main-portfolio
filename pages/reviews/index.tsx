import style from "./review.module.scss";
const Review = () => {
  return (
    <div className={style.reviewContainer}>
      <div className={style.review}>
        <div></div>
      </div>
      <div className={style.stats}>
        <div className={style.eachStats}>
          <h4>Projects Created</h4>
          <h1>6+</h1>
        </div>
        <div className={style.eachStats}>
          <h4>Years of Experience</h4>
          <h1>4 Years</h1>
        </div>
        <div className={style.eachStats}>
          <h4>Client Satisfaction</h4>
          <h1>98%</h1>
        </div>
      </div>
    </div>
  );
};
export default Review;
