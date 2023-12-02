module.exports = {

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://127.0.0.1:8080/api/:path*',
      },
      // {
      //   source: '/login/:path*',
      //   destination: .env.API_URL+':8080/:path*',
      // },
    ];
  },
};