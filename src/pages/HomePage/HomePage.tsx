
import "./style.scss"
import HomeSlider from '@/components/HomeSlider/HomeSlider'
import MovieSlider from "@/components/MovieSlider/MovieSlider"
import React from 'react'
const content = [
  {
      id: "1",
      url: "https://creativereview.imgix.net/content/uploads/2024/12/AlienRomulus-scaled.jpg",
      name: "No way home"

  },
  {
      id: "2",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjoP95gLHgXRmQ6mBBS6I8zAewiFCmXYfZpA&s",
      name: "Bộ phim được nhất"

  },
  {
      id: "3",
      url: "https://www.tallengestore.com/cdn/shop/products/Art_Poster_-_Sicario_-_Tallenge_Hollywood_Collection_210a9d5c-4bf2-4323-ae52-1f5104039449.jpg",
      name: "Bộ phim ấn tượng nhất"

  },
  {
      id: "4",
      url: "https://images.squarespace-cdn.com/content/v1/5acd17597c93273e08da4786/1547847934765-ZOU5KGSHYT6UVL6O5E5J/Shrek+Poster.png",
      name: "Bộ phim quý nhất"

  },
  {
      id: "5",
      url: "https://congthanh.vn/uploads/images/in-poster-phim-anh-dep-.jpg",
      name: "Bộ phim đắt nhất"

  },
  {
      id: "6",
      url: "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/176627/Originals/poster-phim-hoat-hinh-1.jpg",
      name: "Bộ phim duyệt nhất"

  },
  {
      id: "7",
      url: "https://i.pinimg.com/736x/6f/b9/ae/6fb9ae7a0ae4e30cdfb3bebbd31ad8f8.jpg",
      name: "Bộ phim duyệt nhất"

  },
  {
      id: "8",
      url: "https://i.pinimg.com/736x/6f/b9/ae/6fb9ae7a0ae4e30cdfb3bebbd31ad8f8.jpg",
      name: "Bộ phim duyệt nhất"

  },
  {
      id: "9",
      url: "https://i.pinimg.com/736x/6f/b9/ae/6fb9ae7a0ae4e30cdfb3bebbd31ad8f8.jpg",
      name: "Bộ phim duyệt nhất"

  },
]
function HomePage() {
  return (
    <div>
      {/* Slider */}
      <HomeSlider />

      {/* Body */}
      <div className="body--container">
        {/* Continue watching */}
        <div>
          <h2 className="heading">Continue watching</h2>
          <div>
            <MovieSlider movies={content}/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomePage