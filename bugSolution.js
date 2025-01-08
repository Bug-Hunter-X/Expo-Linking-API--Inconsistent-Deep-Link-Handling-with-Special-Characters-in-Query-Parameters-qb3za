This solution addresses the issue by URL encoding the query parameters before constructing the deep link and URL decoding them after retrieving the URL using Linking.getInitialURL().  This ensures that the special characters are handled correctly. 

```javascript
import * as Linking from 'expo-linking';
import { useEffect, useState } from 'react';

const App = () => {
  const [initialUrl, setInitialUrl] = useState(null);
  
  useEffect(() => {
    const handleInitialUrl = async () => {
      const url = await Linking.getInitialURL();
      setInitialUrl(url);
    };

    Linking.addEventListener('url', (e) => {
      setInitialUrl(e.url);
    });

    handleInitialUrl();
  }, []);

  useEffect(() => {
    if(initialUrl){
      // Decode the URL if necessary
      const urlParams = new URLSearchParams(new URL(initialUrl).search);
      const decodedParams = {};
      for (const [key, value] of urlParams) {
        decodedParams[key] = decodeURIComponent(value);
      }

      //Use decodedParams
      console.log('Decoded params:', decodedParams);
      //Navigate based on decoded URL
    }
  }, [initialUrl])

  return (
    <View>
      {/* Display URL, if available */}
      {initialUrl && <Text>{initialUrl}</Text>}
    </View>
  );
};
```