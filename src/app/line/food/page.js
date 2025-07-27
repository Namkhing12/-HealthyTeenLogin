'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import BottomMenu from '../components/menu';

const categories = [
  { name: 'อาหารคาว', icon: '/icons/savory.png' },
  { name: 'อาหารหวาน', icon: '/icons/sweet.png' },
  { name: 'เครื่องดื่ม', icon: '/icons/drink.png' },
  { name: 'ผลไม้', icon: '/icons/fruit.png' },
  { name: 'ของว่าง', icon: '/icons/snack.png' },
  { name: 'อาหารคลีน', icon: '/icons/clean.png' },
];

const savoryFoods = [
  { name: 'ข้าวผัดหมู', calories: 400, image: '/foods/fried-rice.png' },
  { name: 'ต้มยำกุ้ง', calories: 150, image: '/foods/tomyam.png' },
  { name: 'แกงเขียวหวานไก่', calories: 300, image: '/foods/green-curry.png' },
];

const sweetFoods = [
  { name: 'บัวลอย', calories: 250, image: '/foods/boiloy.png' },
  { name: 'ไอศกรีม', calories: 180, image: '/foods/icecream.png' },
  { name: 'ช็อกโกแลต', calories: 300, image: '/foods/chocolate.png' },
];

export default function FoodLogPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="page">
      {/* Header */}
    <div className="topbar">
  <Link href="/line/home" className="back-btn"></Link>
  <h1>บันทึกอาหาร</h1>
  <Image src="/pig-icon.png" alt="icon" width={30} height={30} />
</div>

      {/* Search */}
      <div className="search-box">
        <input
          type="text"
          placeholder="ค้นหา"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category */}
      <div className="category-scroll">
        {categories.map((c) => (
          <div key={c.name} className="category-item">
            <Image src={c.icon} alt={c.name} width={50} height={50} />
            <span>{c.name}</span>
          </div>
        ))}
      </div>

      {/* Banner */}
      <div className="banner-area">
        <Image src="/banners/100kcal.png" alt="banner" width={340} height={100} />
      </div>

      {/* Savory Section */}
      <div className="section">
        <h2>อาหารคาว</h2>
        <div className="food-grid">
          {savoryFoods.map((f) => (
            <div key={f.name} className="food-item">
              <Image src={f.image} alt={f.name} width={80} height={80} />
              <div className="food-name">{f.name}</div>
              <div className="cal">{f.calories} แคลอรี่</div>
              <button className="add-btn">+</button>
            </div>
          ))}
        </div>
      </div>

      {/* Sweet Section */}
      <div className="section">
        <h2>อาหารหวาน</h2>
        <div className="food-grid">
          {sweetFoods.map((f) => (
            <div key={f.name} className="food-item">
              <Image src={f.image} alt={f.name} width={80} height={80} />
              <div className="food-name">{f.name}</div>
              <div className="cal">{f.calories} แคลอรี่</div>
              <button className="add-btn">+</button>
            </div>
          ))}
        </div>
      </div>

      <BottomMenu />

      <style jsx>{`
        .page {
          background: #f3fdf1;
          min-height: 100vh;
          padding-bottom: 100px;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: #3abb47;
          color: white;
        }

       .back-btn {
           background: none;
           border: none;
           font-size: 18px;
           color: white;
           text-decoration: none; 
}

        .search-box {
          background: white;
          padding: 12px 16px;
        }

        .search-box input {
          width: 100%;
          padding: 10px;
          border-radius: 20px;
          border: 1px solid #ccc;
        }

        .category-scroll {
          display: flex;
          overflow-x: auto;
          padding: 12px 16px;
          gap: 16px;
          background: #f7fff3;
        }

        .category-item {
          text-align: center;
          font-size: 12px;
        }

        .banner-area {
          display: flex;
          justify-content: center;
          margin: 16px 0;
        }

        .section {
          margin: 12px 16px;
        }

        .section h2 {
          font-size: 16px;
          margin-bottom: 8px;
          color: #3abb47;
        }

        .food-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .food-item {
          background: white;
          border-radius: 12px;
          padding: 8px;
          width: 100px;
          text-align: center;
          position: relative;
          box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
        }

        .food-name {
          font-size: 13px;
          font-weight: 500;
          margin-top: 4px;
        }

        .cal {
          color: #3abb47;
          font-weight: bold;
          font-size: 13px;
        }

        .add-btn {
          position: absolute;
          bottom: 8px;
          right: 8px;
          border: none;
          background: #3abb47;
          color: white;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}
