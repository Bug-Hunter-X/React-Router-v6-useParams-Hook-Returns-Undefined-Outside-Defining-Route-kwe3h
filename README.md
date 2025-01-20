# React Router v6 useParams Bug

This repository demonstrates a common issue encountered when using the `useParams` hook in React Router v6.  The problem occurs when trying to access route parameters from a component that is not directly nested within the route that defines those parameters.

## Problem

The `useParams` hook only works correctly within the component tree directly below the route that defines the parameters. Accessing it elsewhere returns `undefined`.

## Solution

The solution involves refactoring the component structure or passing the parameters down through props.  Alternatively, you might consider using the `useLocation` hook and parsing the pathname to extract the parameters.  For more complex scenarios, consider using context.