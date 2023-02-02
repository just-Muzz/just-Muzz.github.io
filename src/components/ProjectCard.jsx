export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div className="proj-imgbox">
      <img src={imgUrl} />
      <div className="proj-text">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  )
}
