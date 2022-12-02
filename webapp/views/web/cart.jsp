<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Shop Shoe</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="./assets/css/base.css">
        <link rel="stylesheet" href="./assets/css/cart.css">
        <link rel="stylesheet" href="./assets/css/main.css">
        <!--font-->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Fasthand&display=swap" rel="stylesheet">
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
                    <li><a href="index.html" title="" >Home</a></li>
                    <li><a href="" title="">New</a></li>
                    <li><a href="" title="">Intro</a></li>
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
                        <a href="" title="">
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
                                <li><a href="login.html">login</a></li>
                                <li><a href="">shop</a></li>
                                <li><a href="">cart</a></li>
                                <li><a href="">about</a></li>
                                <li><a href="">contact</a></li>
                            </ul>
                        </div> 
                    </li>
                </ul>
            </nav>
        </div>
        <!--nav-->
        <!--baner-->
        <main class="main_cartform">
            <div>
                <h2 style="font-size: 40px; padding:30px; font-family: 'Fasthand', cursive;">Shopping Cart</h2>
            </div>
            
            <div class="cart-container text-table">
                <table border="1" class="cart-table"> 
                    <thead>
                        <tr >
                            <td>Remove</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>
                                <a href=""><i class="fas fa-trash-alt"></i></a>
                            </td>
                            <td>
                                <img src="./assets/img/anya3.jpg" alt="">
                            </td>
                            <td>
                                <h5>anya loli hop phap</h5>
                            </td>
                            <td>
                                <h5>$65</h5>
                            </td>
                            <td>
                                <input class="w-25 pl-1" value="1" type="number" style="width:50px">
                            </td>
                            <td>
                                <h5>$130</h5>
                            </td>                            
                        </tr>                         
                        <tr >
                            <td>
                                <a href=""><i class="fas fa-trash-alt"></i></a>
                            </td>
                            <td>
                                <a href=""><i class="fas fa-trash-alt"></i></a>
                            </td>
                            <td>
                                <a href=""><i class="fas fa-trash-alt"></i></a>
                            </td>
                            <td>
                                <a href=""><i class="fas fa-trash-alt"></i></a>
                            </td>
                            <td>
                                <a href=""><i class="fas fa-trash-alt"></i></a>
                            </td>
                            <td>
                                <a href=""><i class="fas fa-trash-alt"></i></a>
                            </td>                            
                        </tr>    
                    </tbody>
                </table>
            </div>
            <div class="bot-cart">
                <div class="coupon">
                    <h5 style="color:white; background:#333; padding: 0 10px;">COUPON</h5>
                    <h6 class="text-coupon">Enter your coupon code if you have one.</h6>
                    <input class="input_cart" placeholder="coupon code here">
                    <button >APPLY COUPON</button>

                </div>
                <div class="cart-total">
                    <h5 style="color:white; background:#333; padding: 0 10px;">CART TOTAL</h5>
                    <div class="cart-total_top" >
                        <h6>Subtotal</h6>
                        <p>$000.0000</p>
                    </div>
                    <div class="cart-total_bet" >
                        <h6>Shipping</h6>
                        <p>$000.0000</p>
                    </div>
                    <div class="cart-total_bot" >
                        <h6>total</h6>
                        <p>$000.0000</p>
                    </div>
                    <button class="input_cart" >Process to checkout</button>
                    
                </div>
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