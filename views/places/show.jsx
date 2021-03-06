const React = require('react')
const Def = require('../default')
function show() {
    let message = 'Validation Error'               
    if (data.message) {
      message = (
        <h4 className="alert-danger">
          {data.message}
        </h4>
      )
    }
    return (
        <Def>
<main>
    <div className="row">
       <div className="col-sm-6">
         <img src={data.place.pic} alt={data.place.name} />
          <h3>
             Located in {data.place.city}, {data.place.state}
           </h3>
       </div>
       <div className="col-sm-6">
        <h2>
           Description
        </h2>
        <h3>{data.place.showEstablished}</h3>
        <h4>Serving{data.place.cuisines}</h4>
        <a href={`/places/${data.place.id}/edit`} className="btn btn-warnig">
           Edit
           </a>
  
                <h1>{data.place.name}</h1>
                {/* <a href={`/places/${data.id}/edit`} className="btn btn-warnig">EDIT</a> */}
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
        </div>
    </div>
</main>
        </Def>
    )
}
// module.exports = show
// <Def>
//   <main>
   
//       <div className="col-sm-6">
//         ...
//         <h2>
//           Description
//         </h2>
//         <h3>
//           {data.place.showEstablished()}
//         </h3>
//         <h4>
//           Serving {data.place.cuisines}
//         </h4>
//         ...
//     </div>
//   </main>
// </Def>
