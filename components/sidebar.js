// function sidebar(){















// //     return `  <div>
// //     <p>   NEW</p>
// //     <p>FURNITURE</p>
// //     <li>LIVING ROOM FURNITURE</li>
// // <li>DINING & KITCHEN FURNITURE</li>


// //     <p>DECOR & MIRRORS</p>
// //     <li>MIRRORS</li>
// // <li>HOME ACCESSORIES</li>
// // <li>ART & WALL DECOR</li>

// //     <p>LIGHTING</p>
// //     <li>VIEW ALL</li>
// //     <li> TABLE LAMPS</li>
// //     <li>FLOOR LAMPS</li>
// //     <li>FLUSH MOUNTS</li>
// //     <p>PILLOWS & THROWS</p>
// //   <li id="view">  VIEW ALL</li>
// // <li id="pillows">PILLOWS</li>
// // <li id="poufs">POUFS</li>
// // <li id="throws">THROWS</li>
// // <li >BEST SELLERS</li>
// //     <p>RUGS</p>
// //     <p>KITCHEN & DINING</p>
// //     <p>BEDDING & BATH</p>
// //     <p>OUTDOOR</p>
// //     <p>    GIFTS</p>
// //     <p>SALE & OFFERS</p>
// //     <p>    KRAVITZ DESIGN</p>
// //     <p>  COLLABORATIONS</p>
// //     <p> IDEAS & INSPIRATION</p>
// //     <p>  FREE DESIGN SERVICES</p>
// //     <p>   TRADE PROGRAM
// //     </p>
// //     <p></p>
// // </div>`
// }
// export default sidebar;



function sidebar(){
    return `  <div>
    <p>   NEW</p>
    <p onclick="window.location.href='furniture.html'">FURNITURE</p>
    <li onclick="window.location.href='furniture.html'" >LIVING ROOM FURNITURE</li>
    <p onclick="window.location.href='lightning.html'">LIGHTING</p>
    <li onclick="window.location.href='lightning.html'">VIEW ALL</li>

    <p>PILLOWS & THROWS</p>
  <li  onclick="window.location.href='PILLOWS&THROWS.html'"  id="view">  VIEW ALL</li>
<li   onclick="window.location.href='pillows.html'" id="pillows">PILLOWS</li>
<li onclick="window.location.href='poufs.html'"  id="poufs">POUFS</li>
<li onclick="window.location.href='PILLOWS&THROWS.html'" >BEST SELLERS</li>
<p>DECOR & MIRRORS</p>
    <li>MIRRORS</li>
<li>HOME ACCESSORIES</li>
<li>ART & WALL DECOR</li>
    <p>RUGS</p>
    <p>KITCHEN & DINING</p>
    <p>BEDDING & BATH</p>
    <p>OUTDOOR</p>
    <p>    GIFTS</p>
    <p>SALE & OFFERS</p>
    <p>    KRAVITZ DESIGN</p>
    <p>  COLLABORATIONS</p>
    <p> IDEAS & INSPIRATION</p>
    <p>  FREE DESIGN SERVICES</p>
    <p>   TRADE PROGRAM
    </p>
    <p></p>
</div>`
}
export default sidebar;