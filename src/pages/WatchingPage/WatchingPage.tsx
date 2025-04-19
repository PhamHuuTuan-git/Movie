import Player from '@/components/Player/Player'
import "./style.scss";
type Props = {
  idMovie: string,
  episode: string
}
function WatchingPage({ idMovie, episode }: Props) {
  return (
    <div className='watching--container'>
      <div>
        <h2 className='name-watching'>Gia tài của mẹ</h2>
      </div>
      <div style={{ marginTop:"10px"}}>
        <Player src='https://vip.opstream12.com/20241205/24628_4b59d913/index.m3u8' />
      </div>
    </div>
  )
}

export default WatchingPage