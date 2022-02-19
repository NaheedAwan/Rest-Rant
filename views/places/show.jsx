const React = require('react')
const Def = require('../default')
function show() {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <a href={`/places/${data.id}/edit`} className="btn btn-warnig">EDIT</a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}
module.exports = show
