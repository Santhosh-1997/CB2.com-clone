function navbar(){
    return `
    <div id="leftheader">
    <div id="options">
        <i class="fa-solid fa-bars fa-2x"></i>    
    </div>
    <div id="search">
        <i class="fa-solid fa-magnifying-glass fa-2x"></i>
        <input id="searchbar" type="search">
    </div>
    
</div>
<div id="logo">
    <img src="https://www.stpaulcollection.com/wp-content/uploads/2018/11/st-paul-collection-amenities-cb2.png" alt="">
</div>
<div id="rightheader">
    <ul>
        <li>
            <div>
                <i class="fa-solid fa-location-dot fa-2x"></i>
            </div>
        </li>
        <li>
            <div>
                <i class="fa-solid fa-user fa-2x"></i>
            </div>
        </li>
        <li>
            <div>
                <i class="fa-solid fa-heart fa-2x"></i>
            </div>
        </li>
        <li>
            <div>
                <i class="fa-solid fa-cart-shopping fa-2x"></i>
                <span id ="cart-count"></span>
            </div>
        </li>
    </ul>
</div>`
}

export default navbar