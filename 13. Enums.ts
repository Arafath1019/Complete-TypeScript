enum RType {
  SUCCESS,
  FAILURE,
  UNAUTHENTICATED,
  FORBIDDEN,
}

interface APIResponse<T> {
  status: number;
  type: string;
  data: T;
};

const response1 : APIResponse<object>{
    status: 200,
    type: RType.SUCCESS,
    data : {
        name: "test",
        something: 300,
    },
}
