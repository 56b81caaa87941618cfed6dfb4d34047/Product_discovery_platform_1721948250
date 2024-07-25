/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1721948252", {
    template: `
    <div>
        <nav class="bg-white shadow dark:bg-gray-800">
            <div class="container flex items-center justify-between p-6 mx-auto">
                <a href="#" class="text-2xl font-bold text-gray-800 dark:text-white">ProductScout</a>
                <div class="flex items-center space-x-4">
                    <a href="#" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Home</a>
                    <a href="#" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</a>
                    <a href="#" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact Us</a>
                </div>
            </div>
        </nav>
        <footer id="footer-section" class="flex-1 bg-white dark:bg-gray-800">
            <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                <hr id="footer-divider" class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                            ProductScout
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-gray-500 dark:text-gray-400">
                        Unlock a world of new products tailored to your interests. Powered by intelligent algorithms, Discover makes finding your next favorite thing effortless.
                    </div>
                </div>
            </div>
        </footer> 
    </div>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
