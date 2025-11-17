type CancelNotif = {
  userId: number;
  shiftId: number;
  reason?: string;
  createdAt: string;
};

const store: CancelNotif[] = [];

export const TestNotifications = {
  push: (n: CancelNotif) => store.push(n),
  all: () => [...store],
  reset: () => {
    store.length = 0;
  },
};
