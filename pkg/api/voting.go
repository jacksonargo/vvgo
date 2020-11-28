package api

import "net/http"

type VotingView struct{ Template }

func (x VotingView) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	x.Template.ParseAndExecute(ctx, w, r, nil, "voting.gohtml")
}
