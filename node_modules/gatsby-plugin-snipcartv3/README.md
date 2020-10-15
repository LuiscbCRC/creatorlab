# gatsby-plugin-snipcartv3

An update to the wildly popular & original `gatsby-plugin-snipcart`.

A plugin for using the latest Version 3 of [Snipcart](https://snipcart.com/) with [Gatsby](https://www.gatsbyjs.org/).

## Usage

In your `gatsby-config.js` file, add:

```javascript
module.exports = {
	plugins: [
		{
			resolve: 'gatsby-plugin-snipcartv3',
			options: {
				apiKey: 'YOUR_SNIPCART_KEY'
			}
		}
	]
}
```

``` 
<button class="snipcart-add-item"
  data-item-id="starry-night"
  data-item-price="79.99"
  data-item-url="/paintings/starry-night"
  data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
  data-item-image="/assets/images/starry-night.jpg"
  data-item-name="The Starry Night">
  Add to cart
</button>
```

## Options

`apiKey` (required): Your Snipcart API key. If not set, it will try to find it in `process.env.GATSBY_SNIPCART_APIKEY`.

`autopop`: Whether or not the cart will open once a product is added. (Defaults to `false`)

`js`: A Snipcart JavaScript file. (Defaults to `https://cdn.snipcart.com/themes/v3.0.6/default/snipcart.js`)

`jquery`: A jQuery file to link to. Set to `false` for none. (Defaults to `https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js`)

`styles`: A stylesheet file to link to. Set to `false` for none. (Defaults to `https://cdn.snipcart.com/themes/v3.0.6/default/snipcart.css`)
