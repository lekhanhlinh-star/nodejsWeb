<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Shop Shoe</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="./assets/css/base.css">
        <link rel="stylesheet" href="./assets/css/main.css">
        <link rel="stylesheet" href="./assets/css/shop.css">
        <!--font-->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
        <!--icon-->
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src="" async defer></script>
    </head>
    <body>
        <head id="header" class="header">
            <div class="container">
                <div class="header__logo">
                    <img src="./assets/img/logo.png" alt="logoweb">
                </div>
                <div class="header__icon">
                    <!--icon-->
                </div>
            </div>
        </head>
        <!--header-->
        <div class="container__ul">
            <p>SOUNDS</p>
            <nav>
                <ul>
                    <li><a href="index.jsp" title="" >Home</a></li>
                    <li><a href="" title="">New</a></li>
                    <li><a href="intro.jsp" title="">Intro</a></li>
                    <li><a href="" title="">ADIDAS</a></li>
                    <li><a href="" title="">NIKE</a></li>
                    <li><a href="" title="">Sale</a></li>
                    <li class="hover_icon" >
                        <a>
                            <i class="fa fa-search" style="color:yelow"></i>
                                <div class="header__qr hover-search">
                                    <i class="fa fa-search" style="color:yelow"></i>
                                    <input  placeholder="search" >
                                </div>   
                        </a>
                    </li>
                    <li class="hover_icon" >
                        <a href="cart.html" title="">
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </a>
                        <div class="header__qr cart_dasboard">
                            <ul>
                                <li>no product</li>
                                <li><i class="fa fa-frown-o" aria-hidden="true"></i></li>
                            </ul>
                        </div> 
                    </li>
                    <li class="hover_icon">
                        <i class="fa fa-bars" style="color:yelow"></i>
                        <div class="header__qr menu_dasboard">
                            <ul>
                                <li><a href="login.jsp">login</a></li>
                                <li><a href="">shop</a></li>
                                <li><a href="cart.jsp">cart</a></li>
                                <li><a href="">about</a></li>
                                <li><a href="intro.jsp">contact</a></li>
                            </ul>
                        </div> 
                    </li>
                </ul>
            </nav>
        </div>
        <!--nav-->
  <section class="product-page">
    <div class="container_product">
        <div class="container_product-top">
            <p>Shoe Shop</p> <span>&#10230;</span><p>Product</p> <span>&#10230;</span><p>Shoes super cool</p>
        </div>
        <div class="container_product-top">
            <div class="container_product-content-left">
                <div class="container_product-content-left-bigimg">
                    <img src="./assets/img/anya3.jpg"alt="">
                </div>
                <div class="container_product-content-left-smallimg">
                    <img src="./assets/img/anya3.jpg"alt="">
                    <img src="./assets/img/anya2.webp"alt="">
                    <img src="./assets/img/anya1.jpg"alt="">
                    <img src="./assets/img/anya4.jpg"alt="">
                </div>
            </div>
            <div class="container_product-content-right">
                <div class="container_product-content-right_pname">
                    <h1>Anay style 1</h1>
                    <p> MSP:99999999</p>
                </div>
                <div class="container_product-content-right_price">
                    <p>$ 65.00</p>
                </div>
                <div class="container_product-content-right_color">
                    <p><span style="font-weight:bold;">Color:</span> happy <span style="color: red;">*</span></p> 

                </div>
                <div class="container_product-content-right_psize">
                    <p style="font-weight:bold;">Size</p>
                    <div class="size">
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span>
                        <span>XXX</span>
                    </div>
                    <div class="quality">
                        <p style="font-weight:bold;">Quantity</p>
                        <input class="w-25 pl-1" value="1" type="number" style="width:50px">
                        
                    </div>
                    <div>
                        <p style="color:red;">Please choose your size </p>
                    </div>
                    <div class="container_product-content-right_button">
                        <button> <i class="fa fa-shopping-cart"></i><p>Buy product</p>
                            <button><p>Find product at shop</p>
                    </div>
                    <div class="container_product-content-right_icon">
                        <div class="container_product-content-right_icon-item">
                            <i class="fa fa-phone"></i><p>Hotline</p>
                        </div>
                        <div class="container_product-content-right_icon-item">
                            <i class="fa fa-comments"></i><p>Chat</p>
                        </div>
                        <div class="container_product-content-right_icon-item">
                            <i class="fa fa-envelope"></i><p>Mail</p>
                        </div>
                    </div>
                    <div class="container_product-content-right_bottom">
                        <div class="container_product-content-right_bottom-top">
                            &#8744;
                        </div>
                        <!--<div class="container_product-content-right_bottom-header">
                            <a>
                                <p>Denta</p>  
                                <div class="hiden_dentai">
                                    <p>made in Viet Nam</p>
                                </div>
                            </a>
                            <a>
                                <p>Note</p>
                            </a>
                        </div>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container__bottom">
        <div class="barrie">
        </div>
        <div class="denta_bottom">
            <div class="denta_bottom-top text-barrie">
                <p>Information</p>
                <p>Image</p>
            </div> 
            <div class="denta_bottom-bet">
                
            </div> 
        </div>
    </div>
  </section>
        <!--main-->
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our services</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">affiliate program</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">shipping</a></li>
                        <li><a href="#">returns</a></li>
                        <li><a href="#">order status</a></li>
                        <li><a href="#">payment options</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>online shop</h4>
                    <ul>
                        <li><a href="#">watch</a></li>
                        <li><a href="#">bag</a></li>
                        <li><a href="#">shoes</a></li>
                        <li><a href="#">dress</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>follow us</h4>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    </body>
</html>