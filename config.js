
module.exports = {
  baseURL: 'https://selenium-release.storage.googleapis.com',
  version: '3.141.59',
  drivers: {
    chrome: {
      version: '122.0.6261.69',
      arch: process.arch,
      baseURL: 'https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing'
    },
    ie: {
      version: '3.14.0',
      arch: process.arch,
      baseURL: 'https://selenium-release.storage.googleapis.com'
    },
    firefox: {
      version: '0.32.0',
      arch: process.arch,
      baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
    },
    chromiumedge: {
      version: '121.0.2277.128',
      arch: process.arch,
      baseURL: 'https://msedgedriver.azureedge.net',
    },
    edge: {
      version: '17134'
    }
  }
};
