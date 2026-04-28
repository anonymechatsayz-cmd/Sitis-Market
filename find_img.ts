const urls = [
  'https://images.unsplash.com/photo-1518843875459-f738682238a6',
  'https://images.unsplash.com/photo-1550547660-d9450f859349',
  'https://images.unsplash.com/photo-1464965911861-746a04b4bca6'
];

Promise.all(urls.map(u => fetch(u).then(r => console.log(u, r.status))));

