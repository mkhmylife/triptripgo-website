const getHeaders = () => {
  return {
    Authorization: `Bearer kilowatt`,
    'Api-Locale': 'zh-HK',
    Source: `Web`,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
}

// const refreshToken = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
//     method: 'POST',
//     headers: getHeaders(true),
//   });
//   if (res.ok) {
//     const {accessToken, refreshToken} = await res.json();
//     setRecoil(accessTokensState, {accessToken, refreshToken});
//     return;
//   }
//   throw new Error('Not Authorized');
// }

export const fetcher = async <T>(url: string, args?: RequestInit): Promise<T> => {
  try {
    let headers = getHeaders();
    if (args?.headers) {
      headers = {...headers, ...args.headers};
    }
    const res = await fetch(url, {...args, ...{
        headers,
      }
    });
    if (res.ok) {
      return await res.json() as unknown as Promise<T>;
    }
    if (res.status === 404) {
      throw new Error('Not Found');
    }
  } catch (e) {
    throw e;
  }
  throw new Error();
}
