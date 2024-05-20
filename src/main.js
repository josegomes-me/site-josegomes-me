import './styles.css';
import Alpine from 'alpinejs';
import axios from 'axios';

window.Alpine = Alpine;
window.axios = axios;

// // document.addEventListener('alpine:init', () => {
// //     Alpine.data('modal', () => ({
// //         open: false,
// //         toggle() {
// //             this.open = !this.open;
// //         }
// //     }));
// // });

Alpine.start();