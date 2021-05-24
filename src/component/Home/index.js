import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getData} from "../../redux/Data/action";


const Home = React.memo(() => {
    const dispatch = useDispatch()
    const data = useSelector(({Data}) => Data.data)

useEffect(() => {
    dispatch(getData())
}, [])
    console.log(data)
    return (
        <h2>Home</h2>
    )
})

export default Home