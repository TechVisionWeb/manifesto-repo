 
class SiteHeader extends HTMLElement {
  constructor() {
    super(); // Required by spec
    const shadow = this.attachShadow({ mode: 'open' }); // Create Shadow DOM

    shadow.innerHTML = `
      <style>
        :host { display: block; background: #333; color: white; }
        <header class="header fixed top-0 inset-x-0 mx-auto w-full h-auto max-w-[1200px] min-w-[320px] bg-white z-10
">
    <nav class=" w-full z-20 top-0 start-0 border-b border-default">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 ">

        <button data-collapse-toggle="navbar-sticky" type="button"
          class="block items-center active:border-0! p-2 w-10 h-10  top-[0px] relative justify-center text-sm text-body rounded-base lg:hidden   hover:text-heading focus:outline-none focus:ring-1  "
          aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-[20px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
            viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
          </svg>
        </button>
        <a href="index.html" class="flex justify-center items-center space-x-3 rtl:space-x-reverse h-10">
          <img src="./imgs/logo.png" class="h-7 shadow-sm  shadow-gray-950 rounded-full"
            alt="Wake UP UK Logo  writing as W img">
          <span class=" hidden sm:flex flex-end whitespace-nowrap h-full items-end"><img src="./imgs/WakeUpUk.png"
              class="h-7" alt="Wake UP UK Logo  writing as img"></span>
        </a>
        <div class="flex sm:flex-row lg:order-2  space-x-3 md:space-x-0 rtl:space-x-reverse  mx-0  ">
          <ul
            class="flex flex-row   font-medium  rounded-base  md:space-x-8 rtl:space-x-reverse md:flex-row  md:border-0  ">
            <li class=" px-0.5 md:mx-2">
              <a href="#"
                class="block py-2 px-3 text-heading rounded-full   hover:bg-black hover:text-yellow-500  shadow-sm  shadow-gray-950  bg-yellow-400 ">Sign
                the Petition</a>
            </li>


          </ul>

        </div>
        <div class="items-center justify-between hidden w-full lg:flex lg:w-auto md:order-1 gap-10  mt-1.5  "
          id="navbar-sticky">
          <ul class="  text-sm text-body font-bold list-none ">
            <li class="flex flex-col sm:flex-row w-full justify-between text-[16px]">
              <button
                class="flex  flex-row block hover:underline underline-offset-4  justify-center items-center cursor-pointer p-1 border lg:border-none"
                id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"
                class="block items-center block py-2 px-3 text-heading rounded  md:hover:bg-transparent md:border-0 md:hover:text-fg-brand lg:p-0 md:dark:hover:bg-transparent"
                type="button">


                Home
                <svg class="w-4 h-4 ms-1.5 -me-0.5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 9-7 7-7-7" />
                </svg>

              </button>

              <button
                class="flex  flex-row block hover:underline underline-offset-4  justify-center items-center cursor-pointer p-1 border lg:border-none"
                id="aboutDropdownHoverButton" data-dropdown-toggle="aboutDropdownHover" data-dropdown-trigger="hover"
                class="block items-center block py-2 px-3 text-heading rounded   md:hover:bg-transparent md:border-0 md:hover:text-fg-brand lg:p-0 md:dark:hover:bg-transparent"
                type="button">


                About
                <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 9-7 7-7-7" />
                </svg>

              </button>

              <button
                class="flex  flex-row block hover:underline underline-offset-4  justify-center items-center cursor-pointer p-1 border lg:border-none"
                id=" mainfestoDropdownHover" data-dropdown-toggle="mainfestoDropdownHover" data-dropdown-trigger="hover"
                class="block items-center block py-2 px-3 text-heading rounded   md:hover:bg-transparent md:border-0 md:hover:text-fg-brand lg:p-0 md:dark:hover:bg-transparent"
                type="button">


                Manifesto
                <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 9-7 7-7-7" />
                </svg>

              </button>

              <button
                class="flex  flex-row block hover:underline underline-offset-4  justify-center items-center cursor-pointer p-1 border lg:border-none"
                id="involvedDropdownHoverButton" data-dropdown-toggle="involvedDropdownHover"
                data-dropdown-trigger="hover"
                class="block items-center block py-2 px-3 text-heading rounded   md:hover:bg-transparent md:border-0 md:hover:text-fg-brand lg:p-0 md:dark:hover:bg-transparent"
                type="button">


                Get Involved
                <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 9-7 7-7-7" />
                </svg>

              </button>


              <button
                class="flex  flex-row block hover:underline underline-offset-4  justify-center items-center cursor-pointer p-1 border lg:border-none"
                id="involvedDropdownHoverButton" data-dropdown-toggle="contactDropdownHover"
                data-dropdown-trigger="hover"
                class="block items-center block py-2 px-3 text-heading rounded  md:hover:bg-transparent md:border-0 md:hover:text-fg-brand lg:p-0 md:dark:hover:bg-transparent"
                type="button">


                Contact
                <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 9-7 7-7-7" />
                </svg>

              </button>





            </li>
          </ul>
          <div
            class="z-10 hidden font-bold p-1 lg:w-fit! overflow-y-scroll h-[130px] sm:h-auto! sm:overflow-y-visible! bg-white !relative lg:absolute! max-[1024px]:!transform-[translate3d(0px,0px,0px)] border border-default-medium rounded-base shadow-lg rounded"
            id="dropdownHover">
            <ul class="  text-body font-bold list-none p-1   " aria-labelledby="dropdownHoverButton">
              <li class="mx-auto w-full relative border-b">
                <a href="#"
                  class="block items-center justify-center p-2 hover:text-heading mx-auto w-fit hover:underline underline-offset-4 p-2 " href="#index.html">Home</a>

              </li>
              <li class="mx-auto w-full relative border-b">

                <a 
                  class="block items-center justify-center p-2   hover:text-heading mx-auto w-fit hover:underline underline-offset-4   p-2  " href="#capping-political-donations-section" >Capping Political Donations </a>
              </li>
              <li class="mx-auto w-full relative    ">

                <a  
                  class="block items-center justify-center p-2  hover:text-heading mx-auto w-fit hover:underline underline-offset-4 p-2 " href="#the-solution">The Solution for Funding</a>
              </li>




            </ul>
          </div>


          <ul id="aboutDropdownHover"
            class="z-10 hidden font-bold p-1 lg:w-fit!  overflow-y-scroll h-[130px] sm:h-auto! sm:overflow-y-visible! bg-white !relative lg:absolute! max-[1024px]:!transform-[translate3d(0px,0px,0px)] border border-default-medium rounded-base shadow-lg rounded">


            <li class="mx-auto w-full relative border-b">
              <a href="#"
                class="block items-center  p-2   hover:text-heading mx-auto w-fit hover:underline underline-offset-4 p-2 ">Manifesto
                Without a Party</a>
            </li>
            <li class="mx-auto w-full relative border-b">
              <a href="#"
                class="block items-center  p-2   hover:text-heading mx-auto w-fit hover:underline underline-offset-4 p-2 ">Our
                Mission</a>
            </li>

            <li class="mx-auto  relative ">
              <a href="#"
                class="block items-center hover:underline p-2  hover:text-heading mx-auto w-fit hover:underline underline-offset-4 p-2 ">Team</a>
            </li>







          </ul>
          <ul id="mainfestoDropdownHover"
            class="z-10 hidden font-bold p-1 lg:w-fit!   overflow-y-scroll h-[130px] sm:h-auto! sm:overflow-y-visible! bg-white !relative lg:absolute! max-[1024px]:!transform-[translate3d(0px,0px,0px)] border border-default-medium rounded-base shadow-lg rounded   ">


            <li class="mx-auto w-full relative border-b ">

              <a href="#"
                class="block items-center  p-2   hover:text-heading mx-auto w-fit hover:underline underline-offset-4 p-2 ">Regaining
                Trust</a>
            </li>

            <li class="mx-auto w-full relative border-b">

              <a href="#"
                class="block items-center  p-2   hover:text-heading mx-auto w-fit hover:underline underline-offset-4 p-2 ">Buying
                Votes</a>
            </li>

            <li class="mx-auto -full relative border-b">
              <a href="#"
                class="block items-center  p-2  hover:text-heading mx-auto w-fit hover:underline underline-offset-4 p-2 ">Health</a>
            </li>


            <li class="mx-auto w-full relative border-b">

              <a href="#"
                class="block items-center    hover:text-heading mx-auto w-fit hover:underline underline-offset-4 p-2 ">Spirit
                Clause
              </a>
            </li>

            <li class="mx-auto w-full relative border-b">

              <a href="#"
                class="block items-center    hover:text-heading mx-auto w-fit hover:underline underline-offset-4 p-2 ">Housing</a>
            </li>

            <li class="">

              <a href="#"
                class="block items-center    hover:text-heading mx-auto w-fit hover:underline underline-offset-4 p-2 ">
                Migration</a>
            </li>




          </ul>


          <ul id="involvedDropdownHover"
            class="z-10 hidden font-bold p-1 lg:w-fit!   overflow-y-scroll h-[130px] sm:h-auto! sm:overflow-y-visible! bg-white !relative lg:absolute! max-[1024px]:!transform-[translate3d(0px,0px,0px)] border border-default-medium rounded-base shadow-lg rounded">

            <li class="mx-auto w-full relative border-b">

              <a href="#"
                class="block items-center rounded-full  p-2  hover:text-heading mx-auto w-fit hover:underline underline-offset-4 ">Sign
                the
                petition</a>
            </li>
            <li class="mx-auto w-full relative border-b">
              <a href="#"
                class="block items-center  p-2  hover:text-heading mx-auto w-fit hover:underline underline-offset-4 ">Volunteer</a>
            </li>

            <li class="mx-auto w-full relative border-b">
              <a href="#"
                class="block items-center  p-2  hover:text-heading mx-auto w-fit hover:underline underline-offset-4 ">Subscribe
              </a>
            </li>

            <li class="mx-auto w-full relative ">
              <a href="#"
                class="block items-center  p-2  hover:text-heading mx-auto w-fit  hover:underline underline-offset-4 ">Share
                the
                Campaign</a>
            </li>


          </ul>


          <ul id="contactDropdownHover"
            class="z-10 hidden font-bold p-1 lg:w-fit! overflow-y-scroll h-[130px] sm:h-auto! sm:overflow-y-visible! bg-white !relative lg:absolute! max-[1024px]:!transform-[translate3d(0px,0px,0px)] border border-default-medium rounded-base  rounded">

            <li class="mx-auto w-full relative border-b">

              <a href="#"
                class="block items-center  p-2   hover:text-heading mx-auto w-fit hover:underline underline-offset-4 ">Email
                Us</a>
            </li>

            <li class="mx-auto w-full relative  border-b">

              <a href="#"
                class="block items-center  p-2   hover:text-heading mx-auto w-fit hover:underline underline-offset-4 ">Press
                Enquires</a>
            </li>





            <li class="mx-auto w-full relative">

              <div class="flex   flex-col  items-center justify-center  p-1">

                <a class="flex mr-2 shadow-sm shadow-gray-950 flex-row items-center justify-center rounded-full radius border-[2px] w-[30px] h-[30px] border-black w-[200px] "
                  href="#" src="#">
                  <span class="[&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                      <path
                        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </span>
                </a>
                <a class="flex my-1.5 mr-2 shadow-sm shadow-gray-950 flex-row items-center justify-center rounded-full radius border-[2px] w-[30px] h-[30px] border-black w-[200px] "
                  href="#" src="#">
                  <span class="[&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                      <path
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </span>
                </a>
                <a class="flex mr-2 shadow-sm shadow-gray-950 flex-row items-center justify-center rounded-full radius border-[2px] w-[30px] h-[30px] border-black w-[200px] "
                  href="#" src="#">
                  <span class="[&amp;&gt;svg]:h-5 [&amp;&gt;svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                      <path
                        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                      </path>
                    </svg>
                  </span>
                </a>


              </div>
            </li>






    </nav>
  </header>
    `;
  }
}


 
class SiteFooter extends HTMLElement {
  constructor() {
    super(); // Required by spec
    const shadow = this.attachShadow({ mode: 'open' }); // Create Shadow DOM

    shadow.innerHTML = `
      <style>
        :host { display: block; background: #333; color: white; }
        <header class="header fixed top-0 inset-x-0 mx-auto w-full h-auto max-w-[1200px] min-w-[320px] bg-white z-10
">
    <nav class=" w-full z-20 top-0 start-0 border-b border-default">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 ">

        <button data-collapse-toggle="navbar-sticky" type="button"
          class="block items-center active:border-0! p-2 w-10 h-10  top-[0px] relative justify-center text-sm text-body rounded-base lg:hidden   hover:text-heading focus:outline-none focus:ring-1  "
          aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-[20px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
            viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
          </svg>
        </button>
        <a href="index.html" class="flex justify-center items-center space-x-3 rtl:space-x-reverse h-10">
          <img src="./imgs/logo.png" class="h-7 shadow-sm  shadow-gray-950 rounded-full"
            alt="Wake UP UK Logo  writing as W img">
          <span class=" hidden sm:flex flex-end whitespace-nowrap h-full items-end"><img src="./imgs/WakeUpUk.png"
              class="h-7" alt="Wake UP UK Logo  writing as img"></span>
        </a>
        <div class="flex sm:flex-row lg:order-2  space-x-3 md:space-x-0 rtl:space-x-reverse  mx-0  ">
          <ul
            class="flex flex-row   font-medium  rounded-base  md:space-x-8 rtl:space-x-reverse md:flex-row  md:border-0  ">
            <li class=" px-0.5 md:mx-2">
              <a href="#"
                class="block py-2 px-3 text-heading rounded-full   hover:bg-black hover:text-yellow-500  shadow-sm  shadow-gray-950  bg-yellow-400 ">Sign
                the Petition</a>
            </li>


          </ul>

        </div>
        <div class="items-center justify-between hidden w-full lg:flex lg:w-auto md:order-1 gap-10  mt-1.5  "
          id="navbar-sticky">
          <ul class="  text-sm text-body font-bold list-none ">
            <li class="flex flex-col sm:flex-row w-full justify-between text-[16px]">
              <button
                class="flex  flex-row block hover:underline underline-offset-4  justify-center items-center cursor-pointer p-1 border lg:border-none"
                id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"
                class="block items-center block py-2 px-3 text-heading rounded  md:hover:bg-transparent md:border-0 md:hover:text-fg-brand lg:p-0 md:dark:hover:bg-transparent"
                type="button">


                Home
                <svg class="w-4 h-4 ms-1.5 -me-0.5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 9-7 7-7-7" />
                </svg>

              </button>

              <button
                class="flex  flex-row block hover:underline underline-offset-4  justify-center items-center cursor-pointer p-1 border lg:border-none"
                id="aboutDropdownHoverButton" data-dropdown-toggle="aboutDropdownHover" data-dropdown-trigger="hover"
                class="block items-center block py-2 px-3 text-heading rounded   md:hover:bg-transparent md:border-0 md:hover:text-fg-brand lg:p-0 md:dark:hover:bg-transparent"
                type="button">


                About
                <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 9-7 7-7-7" />
                </svg>

              </button>

              <button
                class="flex  flex-row block hover:underline underline-offset-4  justify-center items-center cursor-pointer p-1 border lg:border-none"
                id=" mainfestoDropdownHover" data-dropdown-toggle="mainfestoDropdownHover" data-dropdown-trigger="hover"
                class="block items-center block py-2 px-3 text-heading rounded   md:hover:bg-transparent md:border-0 md:hover:text-fg-brand lg:p-0 md:dark:hover:bg-transparent"
                type="button">


                Manifesto
                <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 9-7 7-7-7" />
                </svg>

              </button>

              <button
                class="flex  flex-row block hover:underline underline-offset-4  justify-center items-center cursor-pointer p-1 border lg:border-none"
                id="involvedDropdownHoverButton" data-dropdown-toggle="involvedDropdownHover"
                data-dropdown-trigger="hover"
                class="block items-center block py-2 px-3 text-heading rounded   md:hover:bg-transparent md:border-0 md:hover:text-fg-brand lg:p-0 md:dark:hover:bg-transparent"
                type="button">


                Get Involved
                <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 9-7 7-7-7" />
                </svg>

              </button>


              <button
                class="flex  flex-row block hover:underline underline-offset-4  justify-center items-center cursor-pointer p-1 border lg:border-none"
                id="involvedDropdownHoverButton" data-dropdown-toggle="contactDropdownHover"
                data-dropdown-trigger="hover"
                class="block items-center block py-2 px-3 text-heading rounded  md:hover:bg-transparent md:border-0 md:hover:text-fg-brand lg:p-0 md:dark:hover:bg-transparent"
                type="button">


                Contact
                <svg class="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 9-7 7-7-7" />
                </svg>

              </button>





            </li>
          </ul>
          <div
            class="z-10 hidden font-bold p-1 lg:w-fit! overflow-y-scroll h-[130px] sm:h-auto! sm:overflow-y-visible! bg-white !relative lg:absolute! max-[1024px]:!transform-[translate3d(0px,0px,0px)] border border-default-medium rounded-base shadow-lg rounded"
            id="dropdownHover">
            <ul class="  text-body font-bold list-none p-1   " aria-labelledby="dropdownHoverButton">
              <li class="mx-auto w-full relative border-b">
                <a href="#"
                  class="block items-center justify-center p-2 hover:text-heading mx-auto w-fit hover:underline underline-offset-4 p-2 " href="#index.html">Home</a>

              </li>
              <li class="mx-auto w-full relative border-b">

                <a 
                  class="block items-center justify-center p-2   hover:text-heading mx-auto w-fit hover:underline underline-offset-4   p-2  " href="#capping-political-donations-section" >Capping Political Donations </a>
              </li>
              <li class="mx-auto w-full relative    ">

                <a  
                  class="block items-center justify-center p-2  hover:text-heading mx-auto w-fit hover:underline underline-offset-4 p-2 " href="#the-solution">The Solution for Funding</a>
              </li>




            </ul>
          </div>


          <ul id="aboutDropdownHover"
            class="z-10 hidden font-bold p-1 lg:w-fit!  overflow-y-scroll h-[130px] sm:h-auto! sm:overflow-y-visible! bg-white !relative lg:absolute! max-[1024px]:!transform-[translate3d(0px,0px,0px)] border border-default-medium rounded-base shadow-lg rounded">


            <li class="mx-auto w-full relative border-b">
              <a href="#"
                class="block items-center  p-2   hover:text-heading mx-auto w-fit hover:underline underline-offset-4 p-2 ">Manifesto
                Without a Party</a>
            </li>
            <li class="mx-auto w-full relative border-b">
              <a href="#"
                class="block items-center  p-2   hover:text-heading mx-auto w-fit hover:underline underline-offset-4 p-2 ">Our
                Mission</a>
            </li>

            <li class="mx-auto  relative ">
              <a href="#"
                class="block items-center hover:underline p-2  hover:text-heading mx-auto w-fit hover:underline underline-offset-4 p-2 ">Team</a>
            </li>







          </ul>
          <ul id="mainfestoDropdownHover"
            class="z-10 hidden font-bold p-1 lg:w-fit!   overflow-y-scroll h-[130px] sm:h-auto! sm:overflow-y-visible! bg-white !relative lg:absolute! max-[1024px]:!transform-[translate3d(0px,0px,0px)] border border-default-medium rounded-base shadow-lg rounded   ">


            <li class="mx-auto w-full relative border-b ">

              <a href="#"
                class="block items-center  p-2   hover:text-heading mx-auto w-fit hover:underline underline-offset-4 p-2 ">Regaining
                Trust</a>
            </li>

            <li class="mx-auto w-full relative border-b">

              <a href="#"
                class="block items-center  p-2   hover:text-heading mx-auto w-fit hover:underline underline-offset-4 p-2 ">Buying
                Votes</a>
            </li>

            <li class="mx-auto -full relative border-b">
              <a href="#"
                class="block items-center  p-2  hover:text-heading mx-auto w-fit hover:underline underline-offset-4 p-2 ">Health</a>
            </li>


            <li class="mx-auto w-full relative border-b">

              <a href="#"
                class="block items-center    hover:text-heading mx-auto w-fit hover:underline underline-offset-4 p-2 ">Spirit
                Clause
              </a>
            </li>

            <li class="mx-auto w-full relative border-b">

              <a href="#"
                class="block items-center    hover:text-heading mx-auto w-fit hover:underline underline-offset-4 p-2 ">Housing</a>
            </li>

            <li class="">

              <a href="#"
                class="block items-center    hover:text-heading mx-auto w-fit hover:underline underline-offset-4 p-2 ">
                Migration</a>
            </li>




          </ul>


          <ul id="involvedDropdownHover"
            class="z-10 hidden font-bold p-1 lg:w-fit!   overflow-y-scroll h-[130px] sm:h-auto! sm:overflow-y-visible! bg-white !relative lg:absolute! max-[1024px]:!transform-[translate3d(0px,0px,0px)] border border-default-medium rounded-base shadow-lg rounded">

            <li class="mx-auto w-full relative border-b">

              <a href="#"
                class="block items-center rounded-full  p-2  hover:text-heading mx-auto w-fit hover:underline underline-offset-4 ">Sign
                the
                petition</a>
            </li>
            <li class="mx-auto w-full relative border-b">
              <a href="#"
                class="block items-center  p-2  hover:text-heading mx-auto w-fit hover:underline underline-offset-4 ">Volunteer</a>
            </li>

            <li class="mx-auto w-full relative border-b">
              <a href="#"
                class="block items-center  p-2  hover:text-heading mx-auto w-fit hover:underline underline-offset-4 ">Subscribe
              </a>
            </li>

            <li class="mx-auto w-full relative ">
              <a href="#"
                class="block items-center  p-2  hover:text-heading mx-auto w-fit  hover:underline underline-offset-4 ">Share
                the
                Campaign</a>
            </li>


          </ul>


          <ul id="contactDropdownHover"
            class="z-10 hidden font-bold p-1 lg:w-fit! overflow-y-scroll h-[130px] sm:h-auto! sm:overflow-y-visible! bg-white !relative lg:absolute! max-[1024px]:!transform-[translate3d(0px,0px,0px)] border border-default-medium rounded-base  rounded">

            <li class="mx-auto w-full relative border-b">

              <a href="#"
                class="block items-center  p-2   hover:text-heading mx-auto w-fit hover:underline underline-offset-4 ">Email
                Us</a>
            </li>

            <li class="mx-auto w-full relative  border-b">

              <a href="#"
                class="block items-center  p-2   hover:text-heading mx-auto w-fit hover:underline underline-offset-4 ">Press
                Enquires</a>
            </li>





            <li class="mx-auto w-full relative">

              <div class="flex   flex-col  items-center justify-center  p-1">

                <a class="flex mr-2 shadow-sm shadow-gray-950 flex-row items-center justify-center rounded-full radius border-[2px] w-[30px] h-[30px] border-black w-[200px] "
                  href="#" src="#">
                  <span class="[&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                      <path
                        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </span>
                </a>
                <a class="flex my-1.5 mr-2 shadow-sm shadow-gray-950 flex-row items-center justify-center rounded-full radius border-[2px] w-[30px] h-[30px] border-black w-[200px] "
                  href="#" src="#">
                  <span class="[&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                      <path
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </span>
                </a>
                <a class="flex mr-2 shadow-sm shadow-gray-950 flex-row items-center justify-center rounded-full radius border-[2px] w-[30px] h-[30px] border-black w-[200px] "
                  href="#" src="#">
                  <span class="[&amp;&gt;svg]:h-5 [&amp;&gt;svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                      <path
                        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                      </path>
                    </svg>
                  </span>
                </a>


              </div>
            </li>






    </nav>
  </header>
    `;
  }       
}
// Register the custom element with a hyphenated name
customElements.define('site-footer', SiteFooter);
customElements.define('site-header', SiteHeader);

