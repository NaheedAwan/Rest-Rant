const React = require('react')
const Def = require('./default')
function home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div><img src="/images/peach-oatmeal1.jpg" alt="Peach Oatmeal bowl" /></div>
                <div>Photo by <a href="https://unsplash.com/@alexandermils?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexander Mils</a> on <a href="https://unsplash.com/photos/MsTOg6rhRVk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}
module.exports = home