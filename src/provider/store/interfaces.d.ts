interface IState {
  cat: {
    categories: { data: any[]; error: any; loading: boolean };
    images: { data: any[]; error: any; loading: boolean };
    currentCategory: any;
  };
}
