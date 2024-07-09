const Course = ({courses}) => {
    let counter = 0;
    return (
      <>
        {
            courses.map( course => {

                return (

                <div key={course.id}>

                    <h2>{course.name}</h2>

                    {course.parts.map(item => {
                        counter += item.exercises;
                        return <p key={item.id}>{item.name} {item.exercises}</p>
                    })
                    }

                    <p><b>Total of {counter} exercises</b></p>
                </div>

                )

            })
        }
      </>
    )
  }

  export default Course
  
