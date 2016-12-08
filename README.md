# quotecall
A stock-quoting app built in React.

### Getting Started ###
Aside from cloning the quotecall code into your own repository, there is a small amount of additional setup required.

Since quotecall uses private API keys from the [Quandl](https://www.quandl.com/) financial database, you will need to set up your own account and private API key from the instructions located [here](https://www.quandl.com/docs/api).

In order to prevent exposing private API keys within this public repository, the 'config.js' file - which holds sensitive data such as your Quandl API key - has been .gitignore'd. Therefore, you will need to create it yourself.

Create a file in your project root directory titled 'config.js', and paste the following code into it:

```javascript
export const PROTECTED_KEY = '<YOUR API KEY HERE>';
```

Once you have created a valid Quandl account and generated a valid API key, go ahead and drop it into the assignment above and that's it, you're done!

