```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the effect depends on the state
    // that the effect itself updates.  The effect's dependency array is missing
    // 'count'.
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```