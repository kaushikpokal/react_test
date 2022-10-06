function Card(props){
    return(
    <>
        <div className="cards">
          <div className="card">
            <img width={'250px'} src={props.imgsrc} alt="" />
            <h4>{props.title}</h4>
            <a href={props.link} className="button">Submit</a>
          </div>
        </div>
      </>
    )
  }

  export default Card;