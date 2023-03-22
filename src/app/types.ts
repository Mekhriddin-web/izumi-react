export interface MovieState {
  id: number;
  title: {
    english: string;
    native: string;
  };
  coverImage: {
    large: string;
  };
}
