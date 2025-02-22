```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Now it's corrected. The dependency array includes 'count'. The effect
    // only runs once because 'count' doesn't change in the effect itself.
    setCount(count + 1);
  }, [count]);

  return <div>Count: {count}</div>;
}
```