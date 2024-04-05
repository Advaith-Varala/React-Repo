import Image1 from "./Image1.jpg"
import Image2 from "./Image2.jpg"
import Image3 from "./Image3.jpg"
import Ig from "./task1sub"


const Image = () => {


    const a = [
        { img: Image1 },
        { img: Image2 },
        { img: Image3 },
    ];

    return (
        <>
            {

                a.map((val, index) => {
                    return (
                        <Ig key={index} image={val.img} />
                    )
                })


            }

        </>

    )

}

export { Image }

