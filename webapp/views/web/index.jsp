 <%@ include file="/common/taglib.jsp" %>
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
                    <li><a href="./index.jsp" title="" >Home</a></li>
                    <li><a href="" title="">New</a></li>
                    <li><a href="./intro.jsp" title="">Intro</a></li>
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
                                <li><a href="./login.jsp">login</a></li>
                                <li><a href="./shop.jsp">shop</a></li>
                                <li><a href="./cart.jsp">cart</a></li>
                                <li><a href="">about</a></li>
                                <li><a href="./intro.jsp">contact</a></li>
                            </ul>
                        </div> 
                    </li>
                </ul>
            </nav>
        </div>
        <!--nav-->
        <div class="banner">
            <!--<img class="banner_1" src="https://thumbs.dreamstime.com/b/banner-classic-men-leather-blue-shoes-gray-background-casual-close-up-222969668.jpg" alt="top_banner">-->
            <div class="box-left"></div>
            <div class="container"> 
                <div class="banner-text">
                    <h3>Update new style</h3>
                    <p>Buy now!!!!</p>
                    <p>
                        <a href="" class="banner-text-btn">Contact</a>
                    </p>
                </div>
            </div>
            <img class="banner_2" src="https://storage.pixteller.com/designs/designs-images/2020-12-21/05/gym-shoes-sale-banner-1-5fe0c46cc78bc.png" alt="top_banner">
        </div>
        <!--baner-->
        <main class="main">
            <div class="container_main">
                <div class="container__padmb">
                    <div class="title-sale">
                        <img src="./views/web/assets/img/splatter-banner-png.webp" alt="" width="355px" height="50px" style="position:Relative; Left:118;">
                        <p><a title="Giày sneaker bán chạy" >Hot selling</a></p>
                    </div>
                    <ul class="container__slide-caroulse">
                        <li class="container__slide-caroulse-list" >
                            <img src="./views/assets/img/anya1.jpg" alt="" width = "442" height="224">
                        </li>
                        <li class="container__slide-caroulse-list">
                            <img src="./views/assets/img/anya2.webp" alt="" width = "442" height="224">
                        </li>
                        <li class="container__slide-caroulse-list">
                            <img src="./views/assets/img/anya3.jpg" alt="" width = "442" height="224">
                        </li>
                    </ul> 
                </div>
            </div>
            <div class="wrapper">
                <div class="text-wrapper">
                    <h3 >giay ADIDAS</h3>  
                </div>

                <ul class="product">
                    <!--moi li la moi san pham order1-->
                    <li>
                        <div class="product-item">
                            <div class="product-top">
                                <a href="product.jsp" class="product-thumb"> <!--anh san pham-->
                                    <img src="./assets/img/anya1.jpg" alt="sp1">
                                </a>
                                <!--buy now-->
                                <a href="" class="buy-now">Buy now</a>
                            </div>
                            <div class="product-info"><!--thong tin san pham-->
                                <a href="" class="product-name">${sp1[0].productName}</a><!--ten san pham-->
                                <div class="product-price"> ${sp1[0].price} </div>
                            </div>
                        </div>
                    </li>
                    <!--moi li la moi san pham order2-->
                    <li>
                        <div class="product-item">
                            <div class="product-top">
                                <a href="product.jsp" class="product-thumb"> <!--anh san pham-->
                                    <img src="./assets/img/anya1.jpg" alt="sp1">
                                </a>
                                <!--buy now-->
                                <a href="" class="buy-now">Buy now</a>
                            </div>
                            <div class="product-info"><!--thong tin san pham-->
                                <a href="" class="product-cart">product type</a><!--loai-->
                                <a href="" class="product-name">product name</a><!--ten san pham-->
                                <div class="product-price"> $price </div>
                            </div>
                        </div>
                    </li>
                    <!--moi li la moi san pham order3-->
                    <li>
                        <div class="product-item">
                            <div class="product-top">
                                <a href="product.jsp" class="product-thumb"> <!--anh san pham-->
                                    <img src="./assets/img/anya1.jpg" alt="sp1">
                                </a>
                                <!--buy now-->
                                <a href="" class="buy-now">Buy now</a>
                            </div>
                            <div class="product-info"><!--thong tin san pham-->
                                <a href="" class="product-cart">product type</a><!--loai-->
                                <a href="" class="product-name">product name</a><!--ten san pham-->
                                <div class="product-price"> $price </div>
                            </div>
                        </div>
                    </li>
                    <!--moi li la moi san pham order4-->
                    <li>
                        <div class="product-item">
                            <div class="product-top">
                                <a href="product.jsp" class="product-thumb"> <!--anh san pham-->
                                    <img src="./assets/img/anya1.jpg" alt="sp1">
                                </a>
                                <!--buy now-->
                                <a href="" class="buy-now">Buy now</a>
                            </div>
                            <div class="product-info"><!--thong tin san pham-->
                                <a href="" class="product-cart">product type</a><!--loai-->
                                <a href="" class="product-name">product name</a><!--ten san pham-->
                                <div class="product-price"> $price </div>
                            </div>
                        </div>
                    </li>
                    <!--moi li la moi san pham order5-->
                    <li>
                        <div class="product-item">
                            <div class="product-top">
                                <a href="product.jsp" class="product-thumb"> <!--anh san pham-->
                                    <img src="./assets/img/anya1.jpg" alt="sp1">
                                </a>
                                <!--buy now-->
                                <a href="" class="buy-now">Buy now</a>
                            </div>
                            <div class="product-info"><!--thong tin san pham-->
                                <a href="" class="product-cart">product type</a><!--loai-->
                                <a href="" class="product-name">product name</a><!--ten san pham-->
                                <div class="product-price"> $price </div>
                            </div>
                        </div>
                    </li>
                    <!--moi li la moi san pham order6-->
                    <li>
                        <div class="product-item">
                            <div class="product-top">
                                <a href="product.jsp" class="product-thumb"> <!--anh san pham-->
                                    <img src="./assets/img/anya1.jpg" alt="sp1">
                                </a>
                                <!--buy now-->
                                <a href="" class="buy-now">Buy now</a>
                            </div>
                            <div class="product-info"><!--thong tin san pham-->
                                <a href="" class="product-cart">product type</a><!--loai-->
                                <a href="" class="product-name">product name</a><!--ten san pham-->
                                <div class="product-price"> $price </div>
                            </div>
                        </div>
                    </li>
                    <!--moi li la moi san pham order7-->
                    <li>
                        <div class="product-item">
                            <div class="product-top">
                                <a href="product.jsp" class="product-thumb"> <!--anh san pham-->
                                    <img src="./assets/img/anya1.jpg" alt="sp1">
                                </a>
                                <!--buy now-->
                                <a href="" class="buy-now">Buy now</a>
                            </div>
                            <div class="product-info"><!--thong tin san pham-->
                                <a href="" class="product-cart">product type</a><!--loai-->
                                <a href="" class="product-name">product name</a><!--ten san pham-->
                                <div class="product-price"> $price </div>
                            </div>
                        </div>
                    </li>
                    <!--moi li la moi san pham order8-->
                    <li>
                        <div class="product-item">
                            <div class="product-top">
                                <a href="product.jsp" class="product-thumb"> <!--anh san pham-->
                                    <img src="./assets/img/anya1.jpg" alt="sp1">
                                </a>
                                <!--buy now-->
                                <a href="" class="buy-now">Buy now</a>
                            </div>
                            <div class="product-info"><!--thong tin san pham-->
                                <a href="" class="product-cart">product type</a><!--loai-->
                                <a href="" class="product-name">product name</a><!--ten san pham-->
                                <div class="product-price"> $price </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
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