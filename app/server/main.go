package main

import (
    pb "./jiken-reminder"
    "log"
    "net"
    "golang.org/x/net/context"
    "google.golang.org/grpc"
    "google.golang.org/grpc/reflection"
)

const (
    port = ":9090"
)

type server struct{
    schedules map[*pb.Schedule]struct{}
}

func (s *server) CreateSchedule(ctx context.Context, in *pb.CreateScheduleRequest) (*pb.CreateScheduleResponse, error) {
    return &pb.CreateScheduleResponse{
		Title: "Hello",
		Deadline: "20190101",
		Content: "はよ",
	}, nil
}

func (s *server) ListSchedule(ctx context.Context, in *pb.ListScheduleRequest) (*pb.ListScheduleResponse, error) {
    return &pb.ListScheduleResponse{
		Schedules: []*pb.Schedule{
			{
			Id: 1,
			Title: "Hello",
			Deadline: "20190101",
			Content: "はよ",
			},
		},
	}, nil
}

func main() {
    lis, err := net.Listen("tcp", port)
    if err != nil {
        log.Fatalf("failed to listen: %v", err)
    }
    s := grpc.NewServer()
    pb.RegisterScheduleServiceServer(s, &server{})
    reflection.Register(s)
    if err := s.Serve(lis); err != nil {
        log.Fatalf("failed to serve: %v", err)
    }
}