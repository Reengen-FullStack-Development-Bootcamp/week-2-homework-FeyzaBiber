import Home from "@/components/Home";
import HotelPage from "@/components/HotelPage";
import Reservation from "@/components/Reservation";
import Payment from "@/components/Payment";

export const routes = [
    {path: '/', component: Home},
    {path: '/hotelpage/:id', component: HotelPage, props: true},
    {path: '/reservation/:id', name:'Reservation' ,component: Reservation, props:true},
    {path: '/payment', name:'Payment' ,component: Payment, props:true}
]
