# quotecall
A stock-quotation app built in React, <strong>currently a work in progress</strong>.

### Getting Started ###
Aside from cloning the quotecall code into your own repository, there is a small amount of additional setup required.

Since quotecall uses private API keys from the [Quandl](https://www.quandl.com/) financial database, you'll need to set up your own account and key using [these](https://www.quandl.com/docs/api) instructions.

In order to prevent exposing non-public API keys within this repository, the project's 'config.js' file - which holds sensitive data such as your private Quandl API key - has been .gitignore'd. Therefore, you will need to create it yourself.

After you have cloned quotecall locally, go ahead and drop a file into the root directory titled 'config.js', and paste the following code into it:

```javascript
export const PROTECTED_KEY = '<YOUR API KEY HERE>';
```

Once you have created a valid Quandl account and generated an API key, paste the key string into the variable above and that's it, you're done!

