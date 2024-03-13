import loadingGif from "../../assets/loading.gif";

export default function Loading(){
    return (
        <div className='flex flex-col justify-center items-center'>
        <img src={loadingGif} alt='' className='m-4' />
      </div>
    )
}