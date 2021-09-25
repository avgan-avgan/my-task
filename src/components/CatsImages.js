import {FixedImgCont, FixedImg, FixedHeader} from "../styles/catsimages";

export default ({photos})=>{
    return(
        <div>
            {/*{JSON.stringify(photos)}*/}
            <FixedHeader>Sweet kitties</FixedHeader>
            <FixedImgCont className='imgCont'>
                {photos.map(({url}, i)=>
                    <FixedImg className='image' key={i} style={{backgroundImage: `url(${url})`,}}/>
                )}
            </FixedImgCont>
        </div>
    )
}