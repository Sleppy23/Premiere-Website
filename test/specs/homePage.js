const mainLogo = require('../pageobjects/homePageTest');

describe('premier group insurance website smoke test', () => {
    it('should load the home page', async () => {
      await browser.url(`http://www.pginsurancetaxes.com`)
      let mainLogo = $(
        '.u_1161064008.small-12.dmRespCol.medium-6.large-6.has-one-widget-only'
      )
      await expect(mainLogo).toBeExisting()
    })
})