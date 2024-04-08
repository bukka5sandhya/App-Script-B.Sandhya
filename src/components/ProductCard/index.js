// ProductCardComponent.js
import './index.css'
import React, { useState } from 'react';

const ProductCardComponent = ({ image, title, price }) => {
  const [liked, setLiked] = useState(false);
  const [inCart, setInCart] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const addToCart = () => {
    setInCart(true);
    // Add to cart functionality
  };

  return (
    <>
    <div className="filter-container">
      <p className="items-number">3456 ITEMS</p>
      <div className="hide-container">
      <a href="/hide"><img src="https://i.ibb.co/dpDkX4P/arrow-left.png" alt="arrow-left"  className="left-arrow"/></a>
      <p className="hide-filter-para">HIDE FILTER</p>
      </div>
      <div className="recommend-container">
        <p className="recommended-para">RECOMMENDED</p>
        <a href="/recommendedItems"><img src="https://i.ibb.co/4FdBKD9/arrow-left.png" alt="arrow-left" className="recommended-icon" border="0"/></a>
        
      </div>
      
     

    </div>
    <hr/>
    <div className="images-sidebar-container">
    <div className="side-bar-container">

    <div className="checkbox-container">
    <a href="/checkboxItems"><img src="https://i.ibb.co/sjxTshj/Checkbox.png" alt="Checkbox" border="0" className="checkbox"/></a>
     <p className="customiazale-para">CUSTOMIZABLE</p>
    </div>
    <hr />

    <div className="ideal-container">
      <p className="ideal-for-para">IDEAL FOR</p>
      <a href="/idealItems"><img src="https://i.ibb.co/4FdBKD9/arrow-left.png" alt="arrow-left"  border="0" className="ideal-icon"/></a>
    </div>
    <p className="all-para">All</p>
    <hr />

    <div className="occassion-container">
      <p className="occassion-for-para">OCCASSION</p>
      <a href="/occassionItems"><img src="https://i.ibb.co/4FdBKD9/arrow-left.png" alt="arrow-left"  border="0" className="occassion-icon"/></a>
    </div>
    <p className="all-para">All</p>
    <hr />

    <div className="work-container">
      <p className="work-for-para">WORK</p>
      <a href="/workItems"><img src="https://i.ibb.co/4FdBKD9/arrow-left.png" alt="arrow-left"  border="0" className="work-icon"/></a>
    </div>
    <p className="all-para">All</p>
    <hr />

    
    <div className="fabric-container">
      <p className="fabric-for-para">FABRIC</p>
      <a href="/fabricItems"><img src="https://i.ibb.co/4FdBKD9/arrow-left.png" alt="arrow-left"  border="0" className="fabric-icon"/></a>
    </div>
    <p className="all-para">All</p>
    <hr />

    <div className="segment-container">
      <p className="segment-for-para">SEGMENT</p>
      <a href="/segmentItems"><img src="https://i.ibb.co/4FdBKD9/arrow-left.png" alt="arrow-left"  border="0" className="segment-icon"/></a>
    </div>
    <p className="all-para">All</p>
    <hr />

   
    <div className="segmentall-container">
      <p className="segmentall-for-para">SEGMENT ALL</p>
      <a href="/segmentAllItems"><img src="https://i.ibb.co/4FdBKD9/arrow-left.png" alt="arrow-left"  border="0" className="segmentall-icon"/></a>
    </div>
    <p className="all-para">All</p>
    <hr />

    <div className="raw-material-container">
      <p className="raw-material-for-para">RAW MATERIALS</p>
      <a href="/rawMaterialItems"><img src="https://i.ibb.co/4FdBKD9/arrow-left.png" alt="arrow-left"  border="0" className="raw-material-icon"/></a>
    </div>
    <p className="all-para">All</p>
    <hr />
    </div>
   <div className="rows">
    <div className="products-card-container">
      
        <div className="first-produt-container">
          
         
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/MBPC7P7/Image.png" alt="Image" border="0"/>
          </a>
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>
        
        <div className="second-product-container"> 
          <h1 className="new-product"></h1>
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/M2JTsDr/Image.png" alt="Image" border="0"/></a>
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>

        <div className="third-product-container"> 
          <h1 className="new-product"></h1>
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/JyPNxgQ/Rectangle-29438.png" alt="Rectangle-29438" border="0"/></a>
          <h1 className="first-product-heading">
            PRODUCT NAME
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>

        
      </div>
      
      <div className="second-row-container">
        <div className="products-card-container">
          <div className="first-produt-container">
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/KD9f3kt/Rectangle-29438.png" alt="Rectangle-29438" border="0"/></a>
          
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>
          
        <div className="second-product-container"> 
          <h1 className="new-product"></h1>
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/ctFdQNs/Rectangle-29438.png" alt="Rectangle-29438" border="0"/></a>
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>

        <div className="third-product-container"> 
          <h1 className="new-product"></h1>
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/QD5PsXw/Rectangle-29438.png" alt="Rectangle-29438" border="0"/></a>
          <h1 className="first-product-heading">
            PRODUCT NAME
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>

          </div>

        </div>

        <div className="third-row-container">
        <div className="products-card-container">
          <div className="first-produt-container">
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/18m50wN/Rectangle-29438.png" alt="Rectangle-29438" border="0"/></a>
        
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>
          
        <div className="second-product-container"> 
          <h1 className="new-product"></h1>
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/JkMFVZv/Rectangle-29438.png" alt="Rectangle-29438" border="0"/></a>
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>

        <div className="third-product-container"> 
          <h1 className="new-product"></h1>
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/7SmPJ4w/Rectangle-29438.png" alt="Rectangle-29438" border="0"/></a>
          <h1 className="first-product-heading">
            PRODUCT NAME
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>

          </div>

        </div>
        
        <div className="fourth-row-container">
        <div className="products-card-container">
          <div className="first-produt-container">
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/2yLyZ9t/Rectangle-29438.png" alt="Rectangle-29438" border="0"/></a>
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>
          
        <div className="second-product-container"> 
          <h1 className="new-product"></h1>
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/m6J8fPp/Rectangle-29438.png" alt="Rectangle-29438" border="0"/></a>
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>

        <div className="third-product-container"> 
          <h1 className="new-product"></h1>
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/3MmRL8r/Rectangle-29438.png" alt="Rectangle-29438" border="0"/></a>
          <h1 className="first-product-heading">
            PRODUCT NAME
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>

          </div>

        </div>


        <div className="fifth-row-container">
        <div className="products-card-container">
          <div className="first-produt-container">
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/MBPC7P7/Image.png" alt="Image" border="0"/>
          </a>
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>
          
        <div className="second-product-container"> 
          <h1 className="new-product"></h1>
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/MBPC7P7/Image.png" alt="Image" border="0"/></a><br />
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>

        <div className="third-product-container"> 
          <h1 className="new-product"></h1>
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/JyPNxgQ/Rectangle-29438.png" alt="Rectangle-29438" border="0"/></a>
          <h1 className="first-product-heading">
            PRODUCT NAME
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>

          </div>

        </div>

        <div className="sixth-row-container">
        <div className="products-card-container">
          <div className="first-produt-container">
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/MBPC7P7/Image.png" alt="Image" border="0"/>
          </a>
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>
          
        <div className="second-product-container"> 
          <h1 className="new-product"></h1>
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/MBPC7P7/Image.png" alt="Image" border="0"/></a><br />
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>

        <div className="third-product-container"> 
          <h1 className="new-product"></h1>
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/JyPNxgQ/Rectangle-29438.png" alt="Rectangle-29438" border="0"/></a>
          <h1 className="first-product-heading">
            PRODUCT NAME
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>

          </div>

        </div>
















      </div>
      
      </div>
      
      
   

      </>
  );
};

export default ProductCardComponent;
