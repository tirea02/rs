//package com.net.common.rs.services;
//
//import com.net.common.rs.entity.Guest;
////import com.net.common.rs.repository.GuestRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class GuestService {
//
//    private final GuestRepository guestRepository;
//
//    @Autowired
//    public GuestService(GuestRepository guestRepository) {
//        this.guestRepository = guestRepository;
//    }
//
//    // Create a new guest
//    public Guest createGuest(Guest guest) {
//        return guestRepository.save(guest);
//    }
//
//    // Retrieve all guests
//    public List<Guest> getAllGuests() {
//        return guestRepository.findAll();
//    }
//
//    // Retrieve a guest by ID
//    public Optional<Guest> getGuestById(Long id) {
//        return guestRepository.findById(id);
//    }
//
//    // Update a guest
//    public Guest updateGuest(Guest guest) {
//        return guestRepository.save(guest);
//    }
//
//    // Delete a guest
//    public void deleteGuest(Long id) {
//        guestRepository.deleteById(id);
//    }
//}
