# Do we retrieve friend requests sent via assoc?
class Api::FriendsController < ApplicationController
    def create
        # friend_sender = current_user.id
        @friend = Friend.new(friend_params)
        # @friend.friend_sender = friend_sender 
        if @friend.save 
            # all good
            @user = current_user
            render "api/users/show"
        else
            render json: @friend.errors.full_messages, status: 401
        end
    end

    def update
        debugger
        @friend = current_user.friend_requests_sent.find_by(friend_sender: params[:id])
        if @friend
            if @friend.status == "PENDING"
                @friend.destroy
                @user = current_user
                render 'api/users/show'
            end
        end
    end

    def destroy
        debugger
        @friend = current_user.friend_requests_sent.find_by(friend_sender: params[:id]) ||
                  current_user.friend_requests_received.find_by(friend_receiver: params[:id])
        @friend.destroy
        @user = current_user
        render 'api/users/show'
    end

    def friend_params
        params.require(:friend).permit(:friend_sender, :friend_receiver, :status)
    end
end