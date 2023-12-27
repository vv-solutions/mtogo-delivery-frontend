module.exports = {

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://10.109.134.171:8086/api/:path*',
      },

    ];
  },
  output: 'standalone'
};
